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
export type GiRollingBombProps = typeof __propDef.props;
export type GiRollingBombEvents = typeof __propDef.events;
export type GiRollingBombSlots = typeof __propDef.slots;
export default class GiRollingBomb extends SvelteComponentTyped<GiRollingBombProps, GiRollingBombEvents, GiRollingBombSlots> {
}
export {};
