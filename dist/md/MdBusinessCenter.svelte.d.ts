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
export type MdBusinessCenterProps = typeof __propDef.props;
export type MdBusinessCenterEvents = typeof __propDef.events;
export type MdBusinessCenterSlots = typeof __propDef.slots;
export default class MdBusinessCenter extends SvelteComponentTyped<MdBusinessCenterProps, MdBusinessCenterEvents, MdBusinessCenterSlots> {
}
export {};
