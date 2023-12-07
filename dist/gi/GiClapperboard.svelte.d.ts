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
export type GiClapperboardProps = typeof __propDef.props;
export type GiClapperboardEvents = typeof __propDef.events;
export type GiClapperboardSlots = typeof __propDef.slots;
export default class GiClapperboard extends SvelteComponentTyped<GiClapperboardProps, GiClapperboardEvents, GiClapperboardSlots> {
}
export {};
