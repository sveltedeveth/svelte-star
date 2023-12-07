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
export type GiTrojanHorseProps = typeof __propDef.props;
export type GiTrojanHorseEvents = typeof __propDef.events;
export type GiTrojanHorseSlots = typeof __propDef.slots;
export default class GiTrojanHorse extends SvelteComponentTyped<GiTrojanHorseProps, GiTrojanHorseEvents, GiTrojanHorseSlots> {
}
export {};
