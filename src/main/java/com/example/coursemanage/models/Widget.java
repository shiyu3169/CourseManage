package com.example.coursemanage.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Widget {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String title;
    private String widgetType;

    // List Widget
    private String listItems;
    private boolean ordered;

    //Heading Widget
    private String text;
    private int size;

    
    /**
     * @return the title
     */
    public int getId() {
        return id;
    }

    /**
     * @return the widgetType
     */
    public String getWidgetType() {
        return widgetType;
    }

    /**
     * @param widgetType the widgetType to set
     */
    public void setWidgetType(String widgetType) {
        this.widgetType = widgetType;
    }

    /**
     * @param size the size to set
     */
    public void setSize(int size) {
        this.size = size;
    }

    /**
     * @return the text
     */
    public String getText() {
        return text;
    }

    /**
     * @param text the text to set
     */
    public void setText(String text) {
        this.text = text;
    }

    /**
     * @return the ordered
     */
    public boolean isOrdered() {
        return ordered;
    }

    /**
     * @param ordered the ordered to set
     */
    public void setOrdered(boolean ordered) {
        this.ordered = ordered;
    }

    /**
     * @return the listItems
     */
    public String getListItems() {
        return listItems;
    }

    /**
     * @param listItems the listItems to set
     */
    public void setListItems(String listItems) {
        this.listItems = listItems;
    }

    /**
     * @return the size
     */
    public int getSize() {
        return size;
    }

    /**
     * @param title the title to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }
}