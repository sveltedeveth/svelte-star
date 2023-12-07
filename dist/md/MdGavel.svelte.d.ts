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
export type MdGavelProps = typeof __propDef.props;
export type MdGavelEvents = typeof __propDef.events;
export type MdGavelSlots = typeof __propDef.slots;
export default class MdGavel extends SvelteComponentTyped<MdGavelProps, MdGavelEvents, MdGavelSlots> {
}
export {};
