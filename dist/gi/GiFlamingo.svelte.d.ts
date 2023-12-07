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
export type GiFlamingoProps = typeof __propDef.props;
export type GiFlamingoEvents = typeof __propDef.events;
export type GiFlamingoSlots = typeof __propDef.slots;
export default class GiFlamingo extends SvelteComponentTyped<GiFlamingoProps, GiFlamingoEvents, GiFlamingoSlots> {
}
export {};
