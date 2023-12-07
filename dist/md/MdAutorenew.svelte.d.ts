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
export type MdAutorenewProps = typeof __propDef.props;
export type MdAutorenewEvents = typeof __propDef.events;
export type MdAutorenewSlots = typeof __propDef.slots;
export default class MdAutorenew extends SvelteComponentTyped<MdAutorenewProps, MdAutorenewEvents, MdAutorenewSlots> {
}
export {};
