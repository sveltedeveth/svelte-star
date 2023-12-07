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
export type GiAmberMosquitoProps = typeof __propDef.props;
export type GiAmberMosquitoEvents = typeof __propDef.events;
export type GiAmberMosquitoSlots = typeof __propDef.slots;
export default class GiAmberMosquito extends SvelteComponentTyped<GiAmberMosquitoProps, GiAmberMosquitoEvents, GiAmberMosquitoSlots> {
}
export {};
