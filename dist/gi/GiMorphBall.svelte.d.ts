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
export type GiMorphBallProps = typeof __propDef.props;
export type GiMorphBallEvents = typeof __propDef.events;
export type GiMorphBallSlots = typeof __propDef.slots;
export default class GiMorphBall extends SvelteComponentTyped<GiMorphBallProps, GiMorphBallEvents, GiMorphBallSlots> {
}
export {};
