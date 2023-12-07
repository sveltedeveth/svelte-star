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
export type DiDigitalOceanProps = typeof __propDef.props;
export type DiDigitalOceanEvents = typeof __propDef.events;
export type DiDigitalOceanSlots = typeof __propDef.slots;
export default class DiDigitalOcean extends SvelteComponentTyped<DiDigitalOceanProps, DiDigitalOceanEvents, DiDigitalOceanSlots> {
}
export {};
