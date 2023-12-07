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
export type GiTurbanProps = typeof __propDef.props;
export type GiTurbanEvents = typeof __propDef.events;
export type GiTurbanSlots = typeof __propDef.slots;
export default class GiTurban extends SvelteComponentTyped<GiTurbanProps, GiTurbanEvents, GiTurbanSlots> {
}
export {};
