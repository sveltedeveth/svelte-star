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
export type FaAndroidProps = typeof __propDef.props;
export type FaAndroidEvents = typeof __propDef.events;
export type FaAndroidSlots = typeof __propDef.slots;
export default class FaAndroid extends SvelteComponentTyped<FaAndroidProps, FaAndroidEvents, FaAndroidSlots> {
}
export {};
