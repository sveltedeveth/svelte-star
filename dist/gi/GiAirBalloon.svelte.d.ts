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
export type GiAirBalloonProps = typeof __propDef.props;
export type GiAirBalloonEvents = typeof __propDef.events;
export type GiAirBalloonSlots = typeof __propDef.slots;
export default class GiAirBalloon extends SvelteComponentTyped<GiAirBalloonProps, GiAirBalloonEvents, GiAirBalloonSlots> {
}
export {};
