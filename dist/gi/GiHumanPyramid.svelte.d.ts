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
export type GiHumanPyramidProps = typeof __propDef.props;
export type GiHumanPyramidEvents = typeof __propDef.events;
export type GiHumanPyramidSlots = typeof __propDef.slots;
export default class GiHumanPyramid extends SvelteComponentTyped<GiHumanPyramidProps, GiHumanPyramidEvents, GiHumanPyramidSlots> {
}
export {};
