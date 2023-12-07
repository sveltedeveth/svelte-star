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
export type GiDragonBallsProps = typeof __propDef.props;
export type GiDragonBallsEvents = typeof __propDef.events;
export type GiDragonBallsSlots = typeof __propDef.slots;
export default class GiDragonBalls extends SvelteComponentTyped<GiDragonBallsProps, GiDragonBallsEvents, GiDragonBallsSlots> {
}
export {};
