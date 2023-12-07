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
export type GiDinosaurEggProps = typeof __propDef.props;
export type GiDinosaurEggEvents = typeof __propDef.events;
export type GiDinosaurEggSlots = typeof __propDef.slots;
export default class GiDinosaurEgg extends SvelteComponentTyped<GiDinosaurEggProps, GiDinosaurEggEvents, GiDinosaurEggSlots> {
}
export {};
