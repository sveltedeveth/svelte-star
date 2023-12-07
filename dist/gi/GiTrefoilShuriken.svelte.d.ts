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
export type GiTrefoilShurikenProps = typeof __propDef.props;
export type GiTrefoilShurikenEvents = typeof __propDef.events;
export type GiTrefoilShurikenSlots = typeof __propDef.slots;
export default class GiTrefoilShuriken extends SvelteComponentTyped<GiTrefoilShurikenProps, GiTrefoilShurikenEvents, GiTrefoilShurikenSlots> {
}
export {};
