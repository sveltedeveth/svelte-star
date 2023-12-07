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
export type GiSpaceshipProps = typeof __propDef.props;
export type GiSpaceshipEvents = typeof __propDef.events;
export type GiSpaceshipSlots = typeof __propDef.slots;
export default class GiSpaceship extends SvelteComponentTyped<GiSpaceshipProps, GiSpaceshipEvents, GiSpaceshipSlots> {
}
export {};
