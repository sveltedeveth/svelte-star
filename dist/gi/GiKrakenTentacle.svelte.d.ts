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
export type GiKrakenTentacleProps = typeof __propDef.props;
export type GiKrakenTentacleEvents = typeof __propDef.events;
export type GiKrakenTentacleSlots = typeof __propDef.slots;
export default class GiKrakenTentacle extends SvelteComponentTyped<GiKrakenTentacleProps, GiKrakenTentacleEvents, GiKrakenTentacleSlots> {
}
export {};
