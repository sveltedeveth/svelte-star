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
export type FaDigitalOceanProps = typeof __propDef.props;
export type FaDigitalOceanEvents = typeof __propDef.events;
export type FaDigitalOceanSlots = typeof __propDef.slots;
export default class FaDigitalOcean extends SvelteComponentTyped<FaDigitalOceanProps, FaDigitalOceanEvents, FaDigitalOceanSlots> {
}
export {};
