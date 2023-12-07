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
export type GiTennisRacketProps = typeof __propDef.props;
export type GiTennisRacketEvents = typeof __propDef.events;
export type GiTennisRacketSlots = typeof __propDef.slots;
export default class GiTennisRacket extends SvelteComponentTyped<GiTennisRacketProps, GiTennisRacketEvents, GiTennisRacketSlots> {
}
export {};
