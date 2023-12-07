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
export type GiStrikingBallsProps = typeof __propDef.props;
export type GiStrikingBallsEvents = typeof __propDef.events;
export type GiStrikingBallsSlots = typeof __propDef.slots;
export default class GiStrikingBalls extends SvelteComponentTyped<GiStrikingBallsProps, GiStrikingBallsEvents, GiStrikingBallsSlots> {
}
export {};
