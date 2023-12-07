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
export type GiMayanPyramidProps = typeof __propDef.props;
export type GiMayanPyramidEvents = typeof __propDef.events;
export type GiMayanPyramidSlots = typeof __propDef.slots;
export default class GiMayanPyramid extends SvelteComponentTyped<GiMayanPyramidProps, GiMayanPyramidEvents, GiMayanPyramidSlots> {
}
export {};
