#ifndef DECRYPTWIN_H
#define DECRYPTWIN_H

#include <QDialog>
#include <QMessageBox>
#include <QDebug>
#include <QClipboard>
#include <QFile>
#include <QDialog>
#include <QInputDialog>

namespace Ui {
class DecryptWin;
}

class DecryptWin : public QDialog
{
    Q_OBJECT

public:
    explicit DecryptWin(QWidget *parent = 0);
    ~DecryptWin();
    void            fill_combobox();

private slots:
    void            encrypt();
    void            clipcopy();
    void            add_service();

private:
    Ui::DecryptWin *ui;
};

#endif // DECRYPTWIN_H
