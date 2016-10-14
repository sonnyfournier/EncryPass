#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent) : QDialog(parent), ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    setWindowTitle("PassPath - v.1.2");
    confPath = QDir::homePath() + "/.PassPath";

    fill_combobox();
    connect(ui->add_button, SIGNAL(clicked()), this, SLOT(add_service()));
    connect(ui->encrypt_button, SIGNAL(clicked()), this, SLOT(encrypt()));
    connect(ui->copy_button, SIGNAL(clicked()), this, SLOT(clipcopy()));
    connect(ui->done_button, SIGNAL(clicked()), qApp, SLOT(quit()));
}

MainWindow::~MainWindow()
{
    delete ui;
}

void                        MainWindow::fill_combobox()
{
    QFile                   file(confPath);
    QString                 tmp;
    QSortFilterProxyModel   *proxy;

    if (file.open(QIODevice::ReadOnly | QIODevice::Text))
    {
        QTextStream flux(&file);
        while(!flux.atEnd())
        {
            tmp = flux.readLine();
            ui->service_box->addItem(tmp);
        }
        file.close();
    }
    proxy = new QSortFilterProxyModel(ui->service_box);
    proxy->setSourceModel(ui->service_box->model());
    ui->service_box->model()->setParent(proxy);
    ui->service_box->setModel(proxy);
    ui->service_box->model()->sort(0);
}

void            MainWindow::add_service()
{
    bool        ok;
    QString     newServ;

    ok = false;
    newServ = QInputDialog::getText(this, "Add a service", "Which service do you want to add ?", QLineEdit::Normal, QString(), &ok);
    if (ok && !newServ.isEmpty())
    {
        ui->service_box->addItem(newServ);

        QFile       file(confPath);
        file.open(QIODevice::WriteOnly | QIODevice::Append);
        QTextStream flux(&file);
        flux << newServ << "\n";
    }
    else
        return;
    QSortFilterProxyModel   *proxy = new QSortFilterProxyModel(ui->service_box);
    proxy->setSourceModel(ui->service_box->model());
    ui->service_box->model()->setParent(proxy);
    ui->service_box->setModel(proxy);
    ui->service_box->model()->sort(0);
}

void            MainWindow::clipcopy()
{
    QString     text;
    QClipboard  *clipboard;

    if (ui->resu_edit->text().isEmpty())
        return;
    text = ui->resu_edit->text();
    clipboard = QApplication::clipboard();
    clipboard->clear();
    clipboard->setText(text);
}

void            MainWindow::encrypt()
{
    int         i;
    int         res;
    char        *pass;
    char        *name;
    QString     qPass;
    QString     qName;

    if (ui->service_box->currentText().isEmpty() || ui->pass_edit->text().isEmpty())
    {
        QMessageBox::critical(this, "Error", "Please fill all the fields.");
        return;
    }
    if (ui->pass_edit->text() != ui->confirm_pass_edit->text())
    {
        QMessageBox::critical(this, "Error", "Passwords are differents.");
        return;
    }
    i = -1;
    res = 0;
    qPass = ui->pass_edit->text();
    pass = new char[qPass.length() + 1];
    strcpy(pass, qPass.toStdString().c_str());
    qName = ui->service_box->currentText();
    name = new char[qName.length() + 1];
    strcpy(name, qName.toStdString().c_str());
    while (name[++i])
    {
        if (name[i] > 64 && name[i] < 91)
            name[i] += 32;
        res += name[i];
    }
    i = -1;
    while (++i < ui->pass_edit->text().length())
        pass[i] = ('!' + ((pass[i] - '!') + res) % 94);
    QString     final(pass);
    ui->resu_edit->setText(final);
}
