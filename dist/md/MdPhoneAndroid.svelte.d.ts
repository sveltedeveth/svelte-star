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
export type MdPhoneAndroidProps = typeof __propDef.props;
export type MdPhoneAndroidEvents = typeof __propDef.events;
export type MdPhoneAndroidSlots = typeof __propDef.slots;
export default class MdPhoneAndroid extends SvelteComponentTyped<MdPhoneAndroidProps, MdPhoneAndroidEvents, MdPhoneAndroidSlots> {
}
export {};
