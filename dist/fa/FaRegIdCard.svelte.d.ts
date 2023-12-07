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
export type FaRegIdCardProps = typeof __propDef.props;
export type FaRegIdCardEvents = typeof __propDef.events;
export type FaRegIdCardSlots = typeof __propDef.slots;
export default class FaRegIdCard extends SvelteComponentTyped<FaRegIdCardProps, FaRegIdCardEvents, FaRegIdCardSlots> {
}
export {};
