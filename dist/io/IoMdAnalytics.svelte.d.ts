import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoMdAnalyticsProps = typeof __propDef.props;
export type IoMdAnalyticsEvents = typeof __propDef.events;
export type IoMdAnalyticsSlots = typeof __propDef.slots;
export default class IoMdAnalytics extends SvelteComponentTyped<IoMdAnalyticsProps, IoMdAnalyticsEvents, IoMdAnalyticsSlots> {
}
export {};
