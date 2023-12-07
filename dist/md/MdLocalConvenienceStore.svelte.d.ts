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
export type MdLocalConvenienceStoreProps = typeof __propDef.props;
export type MdLocalConvenienceStoreEvents = typeof __propDef.events;
export type MdLocalConvenienceStoreSlots = typeof __propDef.slots;
export default class MdLocalConvenienceStore extends SvelteComponentTyped<MdLocalConvenienceStoreProps, MdLocalConvenienceStoreEvents, MdLocalConvenienceStoreSlots> {
}
export {};
