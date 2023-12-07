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
export type GiPotionBallProps = typeof __propDef.props;
export type GiPotionBallEvents = typeof __propDef.events;
export type GiPotionBallSlots = typeof __propDef.slots;
export default class GiPotionBall extends SvelteComponentTyped<GiPotionBallProps, GiPotionBallEvents, GiPotionBallSlots> {
}
export {};
