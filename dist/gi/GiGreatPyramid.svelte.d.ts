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
export type GiGreatPyramidProps = typeof __propDef.props;
export type GiGreatPyramidEvents = typeof __propDef.events;
export type GiGreatPyramidSlots = typeof __propDef.slots;
export default class GiGreatPyramid extends SvelteComponentTyped<GiGreatPyramidProps, GiGreatPyramidEvents, GiGreatPyramidSlots> {
}
export {};
