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
export type GiVibratingBallProps = typeof __propDef.props;
export type GiVibratingBallEvents = typeof __propDef.events;
export type GiVibratingBallSlots = typeof __propDef.slots;
export default class GiVibratingBall extends SvelteComponentTyped<GiVibratingBallProps, GiVibratingBallEvents, GiVibratingBallSlots> {
}
export {};
