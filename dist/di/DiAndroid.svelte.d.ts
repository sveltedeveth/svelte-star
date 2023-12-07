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
export type DiAndroidProps = typeof __propDef.props;
export type DiAndroidEvents = typeof __propDef.events;
export type DiAndroidSlots = typeof __propDef.slots;
export default class DiAndroid extends SvelteComponentTyped<DiAndroidProps, DiAndroidEvents, DiAndroidSlots> {
}
export {};
