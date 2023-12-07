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
export type GiCurledTentacleProps = typeof __propDef.props;
export type GiCurledTentacleEvents = typeof __propDef.events;
export type GiCurledTentacleSlots = typeof __propDef.slots;
export default class GiCurledTentacle extends SvelteComponentTyped<GiCurledTentacleProps, GiCurledTentacleEvents, GiCurledTentacleSlots> {
}
export {};
