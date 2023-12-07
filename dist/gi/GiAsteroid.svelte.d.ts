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
export type GiAsteroidProps = typeof __propDef.props;
export type GiAsteroidEvents = typeof __propDef.events;
export type GiAsteroidSlots = typeof __propDef.slots;
export default class GiAsteroid extends SvelteComponentTyped<GiAsteroidProps, GiAsteroidEvents, GiAsteroidSlots> {
}
export {};
