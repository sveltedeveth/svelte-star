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
export type GiFireBombProps = typeof __propDef.props;
export type GiFireBombEvents = typeof __propDef.events;
export type GiFireBombSlots = typeof __propDef.slots;
export default class GiFireBomb extends SvelteComponentTyped<GiFireBombProps, GiFireBombEvents, GiFireBombSlots> {
}
export {};
