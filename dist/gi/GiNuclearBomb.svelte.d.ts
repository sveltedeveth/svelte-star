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
export type GiNuclearBombProps = typeof __propDef.props;
export type GiNuclearBombEvents = typeof __propDef.events;
export type GiNuclearBombSlots = typeof __propDef.slots;
export default class GiNuclearBomb extends SvelteComponentTyped<GiNuclearBombProps, GiNuclearBombEvents, GiNuclearBombSlots> {
}
export {};
