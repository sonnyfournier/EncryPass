#include "mainwindow.h"
#include <QApplication>

int         main(int ac, char **av)
{
    QApplication    app(ac, av);
    MainWindow      win;

    win.show();
    return (app.exec());
}
