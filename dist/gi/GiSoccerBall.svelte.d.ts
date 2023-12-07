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
export type GiSoccerBallProps = typeof __propDef.props;
export type GiSoccerBallEvents = typeof __propDef.events;
export type GiSoccerBallSlots = typeof __propDef.slots;
export default class GiSoccerBall extends SvelteComponentTyped<GiSoccerBallProps, GiSoccerBallEvents, GiSoccerBallSlots> {
}
export {};
