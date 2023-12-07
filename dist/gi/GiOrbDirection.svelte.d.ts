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
export type GiOrbDirectionProps = typeof __propDef.props;
export type GiOrbDirectionEvents = typeof __propDef.events;
export type GiOrbDirectionSlots = typeof __propDef.slots;
export default class GiOrbDirection extends SvelteComponentTyped<GiOrbDirectionProps, GiOrbDirectionEvents, GiOrbDirectionSlots> {
}
export {};
