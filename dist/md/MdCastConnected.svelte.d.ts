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
export type MdCastConnectedProps = typeof __propDef.props;
export type MdCastConnectedEvents = typeof __propDef.events;
export type MdCastConnectedSlots = typeof __propDef.slots;
export default class MdCastConnected extends SvelteComponentTyped<MdCastConnectedProps, MdCastConnectedEvents, MdCastConnectedSlots> {
}
export {};
