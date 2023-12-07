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
export type FaPhoenixSquadronProps = typeof __propDef.props;
export type FaPhoenixSquadronEvents = typeof __propDef.events;
export type FaPhoenixSquadronSlots = typeof __propDef.slots;
export default class FaPhoenixSquadron extends SvelteComponentTyped<FaPhoenixSquadronProps, FaPhoenixSquadronEvents, FaPhoenixSquadronSlots> {
}
export {};
