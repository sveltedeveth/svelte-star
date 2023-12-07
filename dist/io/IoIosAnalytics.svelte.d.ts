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
export type IoIosAnalyticsProps = typeof __propDef.props;
export type IoIosAnalyticsEvents = typeof __propDef.events;
export type IoIosAnalyticsSlots = typeof __propDef.slots;
export default class IoIosAnalytics extends SvelteComponentTyped<IoIosAnalyticsProps, IoIosAnalyticsEvents, IoIosAnalyticsSlots> {
}
export {};
