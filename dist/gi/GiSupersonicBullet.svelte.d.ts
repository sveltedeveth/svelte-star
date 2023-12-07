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
export type GiSupersonicBulletProps = typeof __propDef.props;
export type GiSupersonicBulletEvents = typeof __propDef.events;
export type GiSupersonicBulletSlots = typeof __propDef.slots;
export default class GiSupersonicBullet extends SvelteComponentTyped<GiSupersonicBulletProps, GiSupersonicBulletEvents, GiSupersonicBulletSlots> {
}
export {};
