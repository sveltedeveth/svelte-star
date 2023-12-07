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
export type MdAndroidProps = typeof __propDef.props;
export type MdAndroidEvents = typeof __propDef.events;
export type MdAndroidSlots = typeof __propDef.slots;
export default class MdAndroid extends SvelteComponentTyped<MdAndroidProps, MdAndroidEvents, MdAndroidSlots> {
}
export {};
