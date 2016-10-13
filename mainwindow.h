#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QDialog>
#include <QMessageBox>
#include <QDebug>
#include <QClipboard>
#include <QFile>
#include <QDialog>
#include <QInputDialog>
#include <QDir>
#include <QSortFilterProxyModel>

namespace Ui {
class MainWindow;
}

class MainWindow : public QDialog
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
    void            fill_combobox();

private slots:
    void            encrypt();
    void            clipcopy();
    void            add_service();

private:
    Ui::MainWindow *ui;
    QString         confPath;
};

#endif // MAINWINDOW_H
