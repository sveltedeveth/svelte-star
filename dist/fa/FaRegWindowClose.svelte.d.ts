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
export type FaRegWindowCloseProps = typeof __propDef.props;
export type FaRegWindowCloseEvents = typeof __propDef.events;
export type FaRegWindowCloseSlots = typeof __propDef.slots;
export default class FaRegWindowClose extends SvelteComponentTyped<FaRegWindowCloseProps, FaRegWindowCloseEvents, FaRegWindowCloseSlots> {
}
export {};
