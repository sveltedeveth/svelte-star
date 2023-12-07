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
export type FaWindowCloseProps = typeof __propDef.props;
export type FaWindowCloseEvents = typeof __propDef.events;
export type FaWindowCloseSlots = typeof __propDef.slots;
export default class FaWindowClose extends SvelteComponentTyped<FaWindowCloseProps, FaWindowCloseEvents, FaWindowCloseSlots> {
}
export {};
