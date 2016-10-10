#include "decryptwin.h"
#include "ui_decryptwin.h"

DecryptWin::DecryptWin(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::DecryptWin)
{
    ui->setupUi(this);

    setWindowTitle("PassPath - v.1.1");

    fill_combobox();

    connect(ui->add_button, SIGNAL(clicked()), this, SLOT(add_service()));
    connect(ui->encrypt_button, SIGNAL(clicked()), this, SLOT(encrypt()));
    connect(ui->copy_button, SIGNAL(clicked()), this, SLOT(clipcopy()));
    connect(ui->done_button, SIGNAL(clicked()), qApp, SLOT(quit()));
}

DecryptWin::~DecryptWin()
{
    delete ui;
}

void            DecryptWin::fill_combobox()
{
    QFile       file("./.ComboBox");

    if (file.open(QIODevice::ReadOnly | QIODevice::Text))
    {
        QTextStream flux(&file);
        while(!flux.atEnd())
        {
            QString         temp = flux.readLine();
            ui->service_box->addItem(temp);
        }
        file.close();
    }
}

void            DecryptWin::add_service()
{
    bool ok = false;
    QString new_serv = QInputDialog::getText(this, "Add a service", "Which service do you want to add ?", QLineEdit::Normal, QString(), &ok);

    if (ok && !new_serv.isEmpty())
    {
        ui->service_box->addItem(new_serv);

        QFile       file("./.ComboBox");
        file.open(QIODevice::WriteOnly | QIODevice::Append);
        QTextStream flux(&file);
        flux << new_serv << "\n";
    }
    else
        return;
}

void            DecryptWin::clipcopy()
{
    if (ui->resu_edit->text().isEmpty())
        return;

    QString     textToClipboard = ui->resu_edit->text();
    QClipboard  *clipboard = QApplication::clipboard();

    clipboard->clear();
    clipboard->setText(textToClipboard);
}

void            DecryptWin::encrypt()
{
    int         i;
    int         res;
    QString     qPass;
    QString     qName;

    i = -1;
    res = 0;
    if (ui->service_box->currentText().isEmpty() || ui->pass_edit->text().isEmpty())
        return;
    if (ui->pass_edit->text() != ui->confirm_pass_edit->text())
    {
        QMessageBox::critical(this, "Error", "Passwords are differents.");
        return;
    }
    qPass = ui->pass_edit->text();
    char        *pass = new char[qPass.length() + 1];
    strcpy(pass, qPass.toStdString().c_str());
    qName = ui->service_box->currentText();
    char        *name = new char[qName.length() + 1];
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
