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
export type DiLessProps = typeof __propDef.props;
export type DiLessEvents = typeof __propDef.events;
export type DiLessSlots = typeof __propDef.slots;
export default class DiLess extends SvelteComponentTyped<DiLessProps, DiLessEvents, DiLessSlots> {
}
export {};
