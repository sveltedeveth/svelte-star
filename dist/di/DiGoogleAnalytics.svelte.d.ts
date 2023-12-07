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
export type DiGoogleAnalyticsProps = typeof __propDef.props;
export type DiGoogleAnalyticsEvents = typeof __propDef.events;
export type DiGoogleAnalyticsSlots = typeof __propDef.slots;
export default class DiGoogleAnalytics extends SvelteComponentTyped<DiGoogleAnalyticsProps, DiGoogleAnalyticsEvents, DiGoogleAnalyticsSlots> {
}
export {};
