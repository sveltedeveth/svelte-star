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
export type GiVelocipedeProps = typeof __propDef.props;
export type GiVelocipedeEvents = typeof __propDef.events;
export type GiVelocipedeSlots = typeof __propDef.slots;
export default class GiVelocipede extends SvelteComponentTyped<GiVelocipedeProps, GiVelocipedeEvents, GiVelocipedeSlots> {
}
export {};
