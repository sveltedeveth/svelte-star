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
export type MdCasinoProps = typeof __propDef.props;
export type MdCasinoEvents = typeof __propDef.events;
export type MdCasinoSlots = typeof __propDef.slots;
export default class MdCasino extends SvelteComponentTyped<MdCasinoProps, MdCasinoEvents, MdCasinoSlots> {
}
export {};
