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
export type MdWbIncandescentProps = typeof __propDef.props;
export type MdWbIncandescentEvents = typeof __propDef.events;
export type MdWbIncandescentSlots = typeof __propDef.slots;
export default class MdWbIncandescent extends SvelteComponentTyped<MdWbIncandescentProps, MdWbIncandescentEvents, MdWbIncandescentSlots> {
}
export {};
